import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import FallHost from '@/components/FallHost'
import FallSearch from '@/components/FallSearch'
import ThreatEvents from '@/components/ThreatEvents'
import ThreatType from '@/components/ThreatType'
import AlertS from '@/components/AlertS'
import HackS from '@/components/HackS'
import WebMailn from '@/components/WebMailn'
import emailMailin from '@/components/emailMailin'
import FileTransfer from '@/components/FileTransfer'
import DNSSearchMa from '@/components/DNSSearchMa'
import flowMonitoring from '@/components/flowMonitoring'
import dynamicMonitoring from '@/components/dynamicMonitoring'
import assetsMan from '@/components/assetsMan'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/FallHost',
      name: 'FallHost',
      component: FallHost
    },
    {
      path: '/FallSearch',
      name: 'FallSearch',
      component: FallSearch
    },
    {
      path: '/ThreatEvents',
      name: 'ThreatEvents',
      component: ThreatEvents
    },
    {
      path: '/ThreatType',
      name: 'ThreatType',
      component: ThreatType
    },
    {
      path: '/FallHost',
      name: 'FallHost',
      component: FallHost
    },
    {
      path: '/FallSearch',
      name: 'FallSearch',
      component: FallSearch
    },
    {
      path: '/AlertS',
      name: 'AlertS',
      component: AlertS
    },
    {
      path: '/HackS',
      name: 'HackS',
      component: HackS
    },
    {
      path: '/WebMailn',
      name: 'WebMailn',
      component: WebMailn
    },
    {
      path: '/emailMailin',
      name: 'emailMailin',
      component: emailMailin
    },
    {
      path: '/FileTransfer',
      name: 'FileTransfer',
      component: FileTransfer
    },
    {
      path: '/DNSSearchMa',
      name: 'DNSSearchMa',
      component: DNSSearchMa
    },
    {
      path: '/flowMonitoring',
      name: 'flowMonitoring',
      component: flowMonitoring
    },
    {
      path: '/dynamicMonitoring',
      name: 'dynamicMonitoring',
      component: dynamicMonitoring
    },
    {
      path: '/assetsMan',
      name: 'assetsMan',
      component: assetsMan
    }

  ]
})
