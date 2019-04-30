import Link from 'next/link'
import Layout from '../layouts/Layout'

const DetailLink = props => (
  <li>
    <Link as={`/project/${props.title.replace(/ /g, '-').toLowerCase()}`} href={`/detail?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)

const Projects = props => (
  <div>
    <p>projects</p>

    <ul>
      {props.projects.map(show => (
        <DetailLink title={show.title} key={show.title.replace(/ /g, '-').toLowerCase()} />
      ))}
    </ul>
  </div>
)

Projects.getInitialProps = () => ({ projects: require('../data/projects.json').projects })

export default Layout(Projects)