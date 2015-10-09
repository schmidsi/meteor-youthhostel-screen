Schemas.Screen = new SimpleSchema([{
  name: {
    type: String
  },
  description: {
  	type: String,
    defaultValue: 'Infoscreen Reception'
  },
  location: {
  	type: String,
    autoform: {
      type: 'map',
      afFieldInput: {
        geolocation: true,
        searchBox: true
      }
    }
  },
  panels: {
    type: [ Schemas.Panel ],
    optional: true
  }
}, Schemas.Base])
