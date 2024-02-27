import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Form() {
    const [state, handleSubmit] = useForm("xnqevdyq");

    if (state.succeeded) {
        return <p>Thanks for checking our content</p>;
    }

    return (
        <form onSubmit={handleSubmit} className="max-w-[500px] mt-5 flex flex-col gap-2">
            
            <input
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                className="w-[300px] px-4 h-[50px] rounded-[20px]"
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <textarea
                id="message"
                name="message"
                placeholder="Message"
                className="px-5 pt-5 w-[300px] h-[150px] rounded-[20px]"
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button
                type="submit"
                disabled={state.submitting}
                className="max-sm:w-[300px] md:w-[350px] bg-[#FCAE36] h-[50px] rounded-[20px] hover:bg-[#91713d]"
            >
                {state.submitting ? 'Submitting...' : 'Submit'}
            </button>
        </form>
    );
}
