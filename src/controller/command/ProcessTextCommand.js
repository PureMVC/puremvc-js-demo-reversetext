/**
 * @class demo.controller.ProcessTextCommand
 * @extends puremvc.SimpleCommand
 */
puremvc.define
(
	// CLASS INFO
	{
		name: 'demo.controller.command.ProcessTextCommand',
		parent:puremvc.SimpleCommand
	},
	
	// INSTANCE MEMBERS
	{  	
		/** @override */		
		execute: function (note)
		{
			// Get the text to be processed from the notification
			var text = note.getBody();
			
			// Process the text
			var reverse = text.split('').reverse().join('');
			
			// Get the TextProxy
			var proxy = this.facade.retrieveProxy( demo.model.proxy.TextProxy.NAME );

			// Set the updated text on the TextProxy			
			proxy.setText( reverse );
			
			// If reversed text is the same as forward text, 
			// send notification that a palindrome was detected
			if ( reverse == text && text != "" ) this.sendNotification( demo.AppConstants.PALINDROME_DETECTED );
		}	
	}
);