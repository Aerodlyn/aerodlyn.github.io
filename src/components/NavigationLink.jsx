import { Show } from "solid-js";

export default function NavigationLink(props) {
  return (
    <Show when={!props.disabled}>
      <li>
        <a class={props.simple ? "text-neutral lowercase" : "btn lowercase"} href={props.target}>
          {props.title}
        </a>
      </li>
    </Show>
  );
}
