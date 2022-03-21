import {Component, OnInit} from '@angular/core';
import {UserCredentials} from '../../models/domains/credentials/user-credentials.model';
import {AuthService} from '../../services/auth.service';
import {AppContext} from '../../contexts/app-context';
import {RoutePath} from '../../models/domains/route-paths.model';
import {NavigationService} from '../../services/navigation.service';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {CustomValidators} from '../../validators/validators';
import {LoadingService} from '../../services/loading.service';
import {UserService} from '../../services/user.service';
import {AlertService} from '../../services/alert.service';
import {AlertModalInputService} from '../../services/alert-modal-input.service';
import {AlertModalInput} from '../../models/domains/alert-modal-input/alert-modal-input';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  userCredentials: UserCredentials;

  options: {icon: string,  mode: string, text: string, color: string, onPress: () => void}[];

  constructor(
    private authService: AuthService,
    private context: AppContext,
    private navService: NavigationService,
    private loadingService: LoadingService,
    private userService: UserService,
    private alertService: AlertService,
    private alertModalInputService: AlertModalInputService,
    private formBuilder: FormBuilder) {
  }

  ngOnInit() {

    this.userCredentials = this.context.getUserCredential();

    this.options = [
      {
        icon: 'refresh',
        mode: 'md',
        text: 'Alterar senha',
        color: '#17a2b8',
        onPress: () => this.alertModalInputService.show(this.getAlertInputModal()),
      },
      {
        icon: 'checkmark-circle-outline',
        mode: 'ios',
        text: 'Service status',
        color: '#10dc60',
        onPress: () => this.navService.push(RoutePath.HealthCheck),
      }
    ];

  }

  getAlertInputModal(): AlertModalInput {

    return {
      title: 'Alterar senha',
      inputs: [
        {
          name: 'currentPassword',
          placeholder: 'Senha atual *',
          type: 'password'
        },
        {
          name: 'newPassword',
          placeholder: 'Nova senha *',
          type: 'password'
        },
        {
          name: 'confirmPassword',
          placeholder: 'Confirmação de senha *',
          type: 'password'
        }
      ],
      formGroup: this.formBuilder.group({
        currentPassword: new FormControl('', [
          Validators.required,
        ]),
        newPassword: new FormControl('', [
          Validators.required,
          CustomValidators.passwordValidator(),
        ]),
        confirmPassword: new FormControl('', [
          Validators.required,
          CustomValidators.mustMatch('newPassword')
        ])
      }),
      formGroupMessage: [
        {
          name: 'currentPassword',
          content: [
            {
              type: 'required',
              message: 'Por favor, informe sua senha atual.'
            },
          ]
        },
        {
          name: 'newPassword',
          content: [
            {
              type: 'required',
              message: 'Por favor, informe sua nova senha.'
            },
            {
              type: 'passwordValid',
              message: `
                A senha deve conter:
                <div>- Mínimo 8 caracteres </div>
                <div>- Ao menos um caractere especial </div>
                <div>- Ao menos uma letra minúscula </div>
                <div>- Ao menos uma letra maiúscula </div>
                <div>- Ao menos um número </div>
              `
            },
          ]
        },
        {
          name: 'confirmPassword',
          content: [
            {
              type: 'required',
              message: 'Por favor, confirme sua senha.'
            },
            {
              type: 'confirmPasswordValid',
              message: 'Confirmação de senha está diferente da nova senha informada.'
            },
          ]
        },
      ],
      confirmPress: (form: { [key: string]: string }) => {

        this.loadingService.show('Alterando senha...');

        const {currentPassword, newPassword, confirmPassword} = form;

        this.userService.changePassword(currentPassword, newPassword, confirmPassword).then(() => {
          this.alertModalInputService.close();
          this.alertService.presentAlert('Alteração de senha', 'Senha alterada com sucesso!');
        }).catch(({error}) => {
          const msg = error.message === 'Incorrect password.' ? 'Senha atual está inválida.' : error.message;
          this.alertModalInputService.presentErrorAlert(msg);
        }).finally(() => {
          this.loadingService.close();
        });

      }

    };
  }

  logout() {
    this.navService.navigate(RoutePath.Login);
    this.authService.logout();
  }

}
