/**
 * @class demo.view.TextComponentMediator
 * @extends puremvc.Mediator
 */
puremvc.define
(
	// CLASS INFO
	{
		name: 'demo.view.mediator.TextComponentMediator',
		parent: puremvc.Mediator
	},
	
	// INSTANCE MEMBERS
	{
		/** @override */
		listNotificationInterests: function ()
		{
			return [
					demo.model.proxy.TextProxy.TEXT_CHANGED,
					demo.AppConstants.PALINDROME_DETECTED
					]
		},
		
		/** @override */
		handleNotification: function (note)
		{
			switch ( note.getName() )
			{
				case demo.model.proxy.TextProxy.TEXT_CHANGED:
					this.viewComponent.setOutputText( note.getBody() );
					break;
				
				case demo.AppConstants.PALINDROME_DETECTED:
					this.viewComponent.setIsPalindrome( true );
					break;
			}
		},
	
		/** @override */
		onRegister: function ()
		{
			// Initialize the TextComponentMediator's view component when its 
			// registered with the Facade and listen to its TEXT_CHANGED events
			this.setViewComponent( new demo.view.component.TextComponent );
			// add the TextComponentMediator as a listener for TEXT_CHANGED events
			// when the
			this.viewComponent.addEventListener( demo.view.component.TextComponent.TEXT_CHANGED, this );
		},					
		
		/** @override */
		onRemove: function ()
		{
			// The TextComponentMediator has been removed from the Facade, and so is no longer
			// in use. Clean up by removing event listeners and dereferencing its viewComponent
			this.viewComponent.removeEventListener( demo.view.component.TextComponent.TEXT_CHANGED, this );
			this.setViewComponent(null);
		},
		
		/**
		 * Handle the W3CTextComponent.TEXT_CHANGED event
		 * @param {Event} textChangedEvent
		 * @return {void}
		 */
		handleEvent: function (textChangedEvent)
		{
			this.sendNotification( demo.AppConstants.PROCESS_TEXT, textChangedEvent.text );
		}
	},
	
	// STATIC MEMBERS
	{
		/**
		 * @static
		 * @type {string}
		 */
		NAME: 'TextComponentMediator'
	}
);