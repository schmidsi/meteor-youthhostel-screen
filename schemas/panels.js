// '_WeatherPaner', '_NewsPanel', '_EmbedlyPanel', '_IframePanel'

Schemas._TextPanel = new SimpleSchema({
  text: {
    type: String,
    autoform: {
      afFieldInput: {
        type: 'textarea',
        rows: 10
      }
    }
  },
  size: {
    type: String,
    allowedValues: ['l', 'm', 's'],
    defaultValue: 'm'
  }
})


Schemas._ImagePanel = new SimpleSchema({
  url: {
    type: String
  },
  type: {
    type: String,
    allowedValues: ['contain', 'cover'],
    defaultValue: 'cover'
  }
})


Schemas.Panel = new SimpleSchema([{
  type: {
    type: String,
    allowedValues: ['Text', 'Image'],
    defaultValue: 'Text'
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
    autoform: {
      type: 'select-checkbox-inline',
      afFieldInput: {
        noselect: true,
        options: {
          'morning':   'morning',
          'noon':      'noon',
          'afternoon': 'afternoon',
          'evening':   'evening',
          'night':     'night'
        }
      }
    }
  },
  text: {
    type: Schemas._TextPanel,
    autoform: {
      data: {
        'asdfasdf': 1234
      }
    }
  },
  image: {
    type: Schemas._ImagePanel
  }
}, Schemas.Base])
