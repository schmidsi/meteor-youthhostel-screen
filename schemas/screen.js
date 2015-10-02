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
        searchBox: true,
        autolocate: true
      }
    }
  },
  panels: {
    type: [Schemas.TextPanel, Schemas.ImagePanel]
  }
}, Schemas.Base])
