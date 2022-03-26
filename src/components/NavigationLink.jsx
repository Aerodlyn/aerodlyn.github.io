export default function NavigationLink(props) {
  return (
    <li>
      <a class={props.simple ? "text-neutral lowercase" : "btn lowercase"} href={props.target}>{props.title}</a>
    </li>
  );
}
