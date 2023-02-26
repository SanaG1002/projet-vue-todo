import Observer from './observer';

export const authEvents = {
	onLogin: 'onLogin',
	onLogout: 'onLogout',
}

const authObserver = new Observer(authEvents);

export default authObserver;