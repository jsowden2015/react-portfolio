import { mount } from 'svelte';
import './react-portfolio-index.css';
import './react-portfolio.css';
import App from './App.svelte';

const app = mount(App, {
  target: document.getElementById('app'),
});

export default app;
