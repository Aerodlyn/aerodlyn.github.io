import NavigationLink from "./NavigationLink";

export default function Navigation(props) {
  return (
    <div class="drawer-content flex flex-col sticky top-0">
      <nav class="navbar bg-neutral text-neutral-content shadow-lg">
        <div class="flex-none md:hidden">
          <label for="nav-drawer" class="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
          </label>
        </div>
        <div class="flex-1 px-2 mx-2">
          <a href="/">Aerodlyn</a>  
        </div>
        <div class="flex-none hidden lg:block">
          <ul class="menu menu-horizontal p-0">
            <NavigationLink target={props.links.blog} title="Blog" disabled></NavigationLink>
            <NavigationLink target={props.links.bricks} title="Bricks & Studs" disabled></NavigationLink>
            <NavigationLink target={props.links.budgie} title="budgie"></NavigationLink>
            <NavigationLink target={props.links.mu} title="Mu"></NavigationLink>
            <NavigationLink target={props.links.orionis} title="Orionis" disabled></NavigationLink>
            <NavigationLink target={props.links.resume} title="Resume"></NavigationLink>
            <NavigationLink target={props.links.satellite} title="Satellite Image Parking Lot Finder"></NavigationLink>
          </ul>
        </div>
      </nav>
    </div>
  );
}
