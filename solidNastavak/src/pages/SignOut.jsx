import { createSignal, onMount, Show } from "solid-js";
import { supabase } from "../services/supabase";
export default function SignOut(){
    const [result, serResult] = createSignal(null);

    onMount(async () => {
        const result = supabase.auth.signOut();
        if (result.error) {
            setResult ("Odjava nije uspijela...");
        } else {
            setResult("Odjava je uspijela!");
        }
    });

    return (
        <>
        <Show when={result()}>
            <div class="bg-slate-300 p-4 rounded">
                {result()}
            </div>
        </Show>
        </>

    );
    
}