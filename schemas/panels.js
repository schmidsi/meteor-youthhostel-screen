// '_WeatherPaner', '_NewsPanel', '_EmbedlyPanel', '_IframePanel'

Schemas._TextPanel = new SimpleSchema({
  text: {
    type: String,
    optional: true,
    autoform: {
      afFieldInput: {
        type: 'textarea',
        rows: 10
      }
    }
  },
  size: {
    type: String,
    optional: true,
    allowedValues: ['l', 'm', 's'],
    defaultValue: 'm'
  }
})


Schemas._ImagePanel = new SimpleSchema({
  url: {
    type: String,
    optional: true
  },
  display: {
    type: String,
    optional: true,
    allowedValues: ['contain', 'cover'],
    defaultValue: 'cover'
  }
})


Schemas.Panel = new SimpleSchema([{
  type: {
    type: String,
    allowedValues: ['text', 'image'],
    defaultValue: 'text'
  },
  priority: {
    type: Number,
    allowedValues: [1, 2, 3],
    defaultValue: 3
  },
  duration: {
    type: Number,
    defaultValue: 60
  },
  timeslots: {
    type: [String],
    allowedValues: ['morning', 'noon', 'afternoon', 'evening', 'night']
  },
  text: {
    type: Schemas._TextPanel,
    optional: true
  },
  image: {
    type: Schemas._ImagePanel,
    optional: true
  }
}, Schemas.Base])
