if (Meteor.isClient) {
  Template.registerHelper('path', (name, kwargs) => {
    return FlowRouter.path(name, kwargs.hash)
  })

  Template.registerHelper('dump', (v) => {
    console.log(v)
    return ''
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
        || undefined  // Screens.simpleSchema().clean({})

      return doc
    },

    mode: () => {
      if ( Screens.findOne( FlowRouter.getParam('id')) ) {
        return 'update'
      } else {
        return 'insert'
      }
    },

    insert: () => {
      if ( Screens.findOne( FlowRouter.getParam('id')) ) {
        return false
      } else {
        return true
      }
    }
  })

  Template.screenDetail.rendered = () => {
    $('[data-hook~=panels]').each( (index, item) => {
      var type = $(item).find('[data-hook~=type-selector]').val()

      $('[data-hook~=content-panel]').hide()
      $(`[data-hook~=${type}-panel]`).show()
    })

    $('[data-hook~=panels]').on('change', '[data-hook~=type-selector]', (event) => {
      var $panel = $(event.target).parents('[data-hook~=panel]')
      var type = $panel.find('[data-hook~=type-selector]').val()

      $panel.find('[data-hook~=content-panel]').hide()
      $panel.find(`[data-hook~=${type}-panel]`).show()
    })
  }
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
