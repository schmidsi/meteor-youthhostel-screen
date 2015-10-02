Schemas = {}

Schemas.Base = new SimpleSchema({
  createdAt: {
    type: Date,
    defaultValue: new Date(),
    autoform: {
      disabled: true
    }
  },
  updatedAt: {
    type: Date,
    autoValue: () => { return new Date() },
    autoform: {
      disabled: true
    }
  },
  createdBy: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    autoform: {
      disabled: true
    },
    optional: true
  }
})
