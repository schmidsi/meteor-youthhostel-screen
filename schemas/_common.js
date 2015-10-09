Schemas = {}

Schemas.Base = new SimpleSchema({
  createdAt: {
    type: Date,
    defaultValue: new Date(),
    autoform: {
      omit: true
    }
  },
  updatedAt: {
    type: Date,
    autoValue: () => { return new Date() },
    autoform: {
      omit: true
    }
  },
  createdBy: {
    type: String,
    regEx: SimpleSchema.RegEx.Id,
    autoform: {
      omit: true
    },
    optional: true
  }
})
