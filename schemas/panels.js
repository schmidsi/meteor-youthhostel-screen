Schemas._Timeslots = new SimpleSchema({
  morning: {
    type: Boolean,
    defaultValue: true
  },
  noon: {
    type: Boolean,
    defaultValue: true
  },
  afternoon: {
    type: Boolean,
    defaultValue: true
  },
  evening: {
    type: Boolean,
    defaultValue: true
  },
  night: {
    type: Boolean,
    defaultValue: true
  }
})

Schemas.PanelBase = new SimpleSchema([{
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
    type: Schemas._Timeslots
  }
}, Schemas.Base])

Schemas.TextPanel = new SimpleSchema([{
  text: {
    type: String
  },
  size: {
    type: String,
    min: 1,
    max: 1,
    allowedValues: ['l', 'm', 's'],
    defaultValue: 'm'
  }
}, Schemas.PanelBase])

Schemas.ImagePanel = new SimpleSchema([{
  url: {
    type: String
  },
  type: {
    type: String,
    allowedValues: ['contain', 'cover'],
    defaultValue: 'cover'
  }
}, Schemas.PanelBase])
