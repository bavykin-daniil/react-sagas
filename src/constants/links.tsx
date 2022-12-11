import { LinkT } from '../types/constants/links';
import { ReactComponent as HomeIcon } from '../assets/icons/home.svg';
import { ReactComponent as NotesIcon } from '../assets/icons/notes.svg';
import { ReactComponent as TrashIcon } from '../assets/icons/trash.svg';

const LINKS: LinkT[] = [
  { name: 'Home', icon: <HomeIcon />, path: '/' },
  { name: 'Notes', icon: <NotesIcon />, path: '/notes' },
  { name: 'Trash', icon: <TrashIcon />, path: '/trash' },
];

export default LINKS;
