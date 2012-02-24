/**
 * @class demo.controller.PrepareModelCommand.js
 */
puremvc.define
(
	// CLASS INFO
	{
		name: 'demo.controller.command.PrepareModelCommand',
		parent: puremvc.SimpleCommand
	},
	
	// INSTANCE MEMBERS
	{
		/** @override */
		execute: function (note)
		{
			// register the TextProxy 
			this.facade.registerProxy( new demo.model.proxy.TextProxy );
		}
	}
)