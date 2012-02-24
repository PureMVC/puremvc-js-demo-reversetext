/**
 * @class demo.controller.PrepareControllerCommand.js
 */
puremvc.define
(
	// CLASS INFO
	{
		name: 'demo.controller.command.PrepareControllerCommand',
		parent: puremvc.SimpleCommand
	},
	
	// INSTANCE MEMBERS	
	{
		/** @override */
		execute: function (note)
		{
			// register teh ProcessTextCommand to handle the PROCESS_TEXT notification 
			this.facade.registerCommand( demo.AppConstants.PROCESS_TEXT, demo.controller.command.ProcessTextCommand );
		}
	}	
);
