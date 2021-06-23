import React from 'react';
import face from '../logo/face2.png';

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: '',
    };
  }
  onEmailChange = (event) => {
    this.setState({ signInEmail: event.target.value });
  };
  onPasswordChange = (event) => {
    this.setState({ signInPassword: event.target.value });
  };

  onSubmitSignIn = () => {
    fetch('https://guarded-atoll-87989.herokuapp.com/signin', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((user) => {
        if (user.id) {
          this.props.loadUser(user);
          this.props.onRouteChange('home');
        }
      });
  };
  render() {
    const { onRouteChange } = this.props;
    return (
      <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <div className="center f1 fw6 ph0 mh0">
                <div
                  className="br2 center"
                  options={{ max: 50 }}
                  style={{ height: 150, width: 150 }}
                >
                  <div className="pa3 center">
                    {' '}
                    <img alt="logo" src={face} />{' '}
                  </div>
                </div>
              </div>
              <h1 className="f2 fw6 ph0 mh0">Acha Rosto</h1>
              <div className="mt3">
                <label className="db fw6 lh-copy f6" htmlFor="email-address">
                  Email
                </label>
                <input
                  onChange={this.onEmailChange}
                  className="pa2 input-reset ba bg-transparent hover-bg-white w-100"
                  type="email"
                  name="email-address"
                  id="email-address"
                />
              </div>
              <div className="mv3">
                <label className="db fw6 lh-copy f6" htmlFor="password">
                  Senha
                </label>
                <input
                  onChange={this.onPasswordChange}
                  className="b pa2 input-reset ba bg-transparent hover-bg-white w-100"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onSubmitSignIn}
                className="b ph3 pv2 input-reset ba b--black black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Conectar"
              />
            </div>
            <div className="lh-copy mt3">
              <p
                onClick={() => onRouteChange('signup')}
                className="f6 link dim black db pointer grow"
              >
                Registrar-se
              </p>
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default SignIn;
