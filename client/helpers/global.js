Template.registerHelper('setMetaTitle', function (newTitle) {
  document.title = Meteor.settings.public.titlePrefix + ' ' + newTitle
  console.log(Meteor.settings.public.titlePrefix)
})