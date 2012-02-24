/**
 * @class demo.controller.StartupCommand
 * @extends puremvc.MacroCommand
 */
puremvc.define
(
	// CLASS INFO
	{
		name: 'demo.controller.command.StartupCommand',
		parent: puremvc.MacroCommand
	},

	// INSTANCE MEMBERS	
	{
		/** @override */
		initializeMacroCommand: function ()
		{
			// add the PrepareControllerCommand- it will register Commands with the Facade
			this.addSubCommand( demo.controller.command.PrepareControllerCommand );
			
			// add the SetupViewsCommand- it will register Mediators with the Facade
			this.addSubCommand( demo.controller.command.PrepareViewCommand );
			
			// add the PrepareModelCommand- it will register Proxys with the Facade
			this.addSubCommand( demo.controller.command.PrepareModelCommand );
		}
	}
)