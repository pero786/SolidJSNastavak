import { A } from "@solidjs/router";
import { createEffect, createSignal, Show } from "solid-js";
import { useAuth } from "../components/AuthProvider";
import { supabase } from "../services/supabase";

export default function Home(props) {
    const session= useAuth();

    const [projects, setProjects] = createSignal(null);

    createEffect (async() => {
        if (session()) {
            const {data,error } = await supabase
            .from("Projects")
            .select();

            if (!error) {
                setProjects(data);
            }

        }
    });

    return (
        <>
        <Show when={!session()}>
            <div class ="bg-red-400 text-3xl p-10 rounded">Morate se prijaviti da biste vidjeli projekte"</div>
        </Show>
        <Show when  ></Show>
        </>
    );
}