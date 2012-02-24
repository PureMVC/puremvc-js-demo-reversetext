/**
 * @class demo.model.TextProxy
 * @extends puremvc.Proxy
 */
puremvc.define
(
	// CLASS INFO
	{
		name: 'demo.model.proxy.TextProxy',
		parent: puremvc.Proxy
	},
	
	// INSTANCE MEMBERS
	{
		/**
		 * Set the TextProxy's text. 
		 * 
		 * Sends a TextProxy.TEXT_CHANGED notification. 
		 * 
		 * @param {string} text
		 * @return {void}
		 */
		setText: function ( text )
		{
			// Store the text
			this.setData( text );
			
			// Send a notification that the text changed 
			this.sendNotification( demo.model.proxy.TextProxy.TEXT_CHANGED, text );
		}
	},
	
	// CLASS MEMBERS	
	{
		/**
		 * The TextProxy's name.
		 * 
		 * @static
		 * @type {string}
		 */
		NAME: 'TextProxy', 
		
		/**
		 * A notification that the text has changed.
		 */
		TEXT_CHANGED: 'textChanged'
		
	}
);