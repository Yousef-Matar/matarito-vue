<script setup>
import { VPTeamMembers } from 'vitepress/theme'

const members = [
  {
    avatar: 'https://avatars.githubusercontent.com/u/67713216?v=4',
    name: 'Yousef Matar',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/Yousef-Matar/matarito-vue' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/yousef-matar-562472202/' }
    ]
  },
]
</script>

# Meet the team

<VPTeamMembers size="medium" :members="members" />

