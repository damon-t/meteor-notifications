Meteor.publish 'userNotifications', ->
  Notifications.find {owner: this.userId}
