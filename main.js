if (Meteor.isClient) {
  Template.registerHelper('path', (name, kwargs) => {
    return FlowRouter.path(name, kwargs.hash)
  })

  Template.screenList.helpers({
    screens: function() {
      return Screens.find()
    }
  })

  Template.screenDetail.helpers({
    // console.log( FlowRouter.getParam('id')
    doc: () => {
      doc = Screens.findOne( FlowRouter.getParam('id') )
        || Screens.simpleSchema().clean({})

      return doc
    }
  })
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

FlowRouter.route('/', {
  triggersEnter: [(context, redirect) => redirect( FlowRouter.path('screenList') )]
})


FlowRouter.route('/admin/screens/', {
  name: 'screenList',
  action: (params, queryParams) => {
    BlazeLayout.render("adminLayout", {content: "screenList"})
  }
})

FlowRouter.route('/admin/screens/:id', {
  name: 'screenDetail',
  action: (params, queryParams) => {
    BlazeLayout.render("adminLayout", {
      content: "screenDetail"
    })
  }
})
