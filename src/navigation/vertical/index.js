const navigation = () => {
  return [
    {
      title: 'Home',
      path: '/home',
      icon: 'mdi:home-outline',
    },
    {
      title: 'Second Page',
      path: '/second-page',
      icon: 'mdi:email-outline',
    },
    {
      path: '/acl',
      action: 'read',
      subject: 'acl-page',
      title: 'Access Control',
      icon: 'mdi:shield-outline',
    },
    {
      path: '/atividade',
      action: 'read',
      subject: 'atividade',
      title: 'Atividade',
      icon: 'mdi:shield-outline',
    },
  ]
}

export default navigation
