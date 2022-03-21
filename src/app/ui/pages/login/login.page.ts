import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FormGroupMessage} from 'src/app/ui/models/domains/form/form-group-message';
import {UserCredentials} from 'src/app/ui/models/domains/credentials/user-credentials.model';
import { UserOptions } from '../../models/domains/options/user-options-model';
import {AuthService} from 'src/app/ui/services/auth.service';
import {LoadingService} from 'src/app/ui/services/loading.service';
import {AlertService} from 'src/app/ui/services/alert.service';
import {environment} from 'src/environments/environment';
import {RoutePath} from 'src/app/ui/models/domains/route-paths.model';
import {NavigationService} from '../../services/navigation.service';
import {AlertModalInputService} from '../../services/alert-modal-input.service';
import {EmailAddress} from '../../models/domains/email/email-address';
import {UserService} from '../../services/user.service';
import {AlertMessage, AlertType} from '../../models/domains/alert-message/alert-message';
import {AlertMessageService} from '../../services/alert-message.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formGroup: FormGroup = this.formBuilder.group({
    user: new FormControl('', Validators.compose([
      Validators.required,
    ])),
    password: new FormControl('', Validators.compose([
      Validators.required,
    ])),    
    remember: new FormControl(false),
  });
  formGroupMessage: FormGroupMessage[] = [
    {
      name: 'user',
      content: [
        {
          type: 'required',
          message: 'Campo usuário é obrigatório.'
        },
      ]
    },
    {
      name: 'password',
      content: [
        {
          type: 'required',
          message: 'Campo senha é obrigatório.'
        },
      ]
    },
    {
      name: 'remember',
      content: []
    }
  ];
  version: string;
  alertMessage: AlertMessage;

  constructor(
    private authService: AuthService,
    private navService: NavigationService,
    private loadingService: LoadingService,
    private formBuilder: FormBuilder,
    private alertInputModalService: AlertModalInputService,
    private userService: UserService,
    private alertService: AlertService,
    private alertMessageService: AlertMessageService
  ) { }

  ngOnInit() {
    this.version = environment.version;
  }

  submitForm(value: { user: string, password: string, remember: boolean }) {
    this.loadingService.show();

    const userCredentials = new UserCredentials();
    const userOptions = new UserOptions();
    userCredentials.setUserName(value.user);
    userCredentials.setPassword(value.password);
    userOptions.setRemember(value.remember);

    this.authService.authenticate(userCredentials, userOptions).then(uc => {
      this.navService.navigate(RoutePath.Home);
    })
    .catch(() => {
      this.showAlert();
      this.loadingService.close();
    });
  }

  openForgotPasswordDialog() {

    this.alertInputModalService.show(
      {
        title: 'Esqueci minha senha',
        text: `
          Para recuperar sua senha, informe seu <strong>e-mail</strong> no campo
          abaixo. Você receberá um e-mail de ajuda para cadastrar uma nova senha.
        `,
        inputs: [
          {
            name: 'email',
            placeholder: 'Informe o seu e-mail *',
            type: 'email'
          },
        ],
        formGroup: this.formBuilder.group({
          email: new FormControl('', [
            Validators.required,
            Validators.email
          ]),
        }),
        formGroupMessage: [
          {
            name: 'email',
            content: [
              {
                type: 'required',
                message: 'Por favor, informe o seu e-mail.'
              },
              {
                type: 'email',
                message: 'E-mail inválido!'
              },
            ]
          },
        ],
        confirmPress: (form: {[key: string]: string}) => {

          this.loadingService.show('Enviando e-mail...');

          const { email } = form;

          this.userService.sendEmailForgotPassword(new EmailAddress(email)) .then(() => {
            this.alertInputModalService.close();
            this.alertService.presentAlert('Recuperar senha', 'E-mail para recuperar a senha foi enviado com sucesso!');
          }).catch(err => {
            this.alertInputModalService.presentErrorAlert(err.error);
          })
          .finally(() => {
            this.loadingService.close();
          });
        }
      }
    );

  }

  showAlert(): void {
    this.alertMessage = this.alertMessageService.error('Usuário ou Senha incorretos');
  }

}
