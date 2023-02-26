import Observer from './observer';

export const todoEvents = {
	beforeCreate: 'beforeCreate',
	beforeUpdate: 'beforeUpdate',
	beforeDelete: 'beforeDelete'
}

const todoObserver = new Observer(todoEvents);

export default todoObserver;