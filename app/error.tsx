"use client";

const Error = ({ error, reset }: { error: Error; reset: () => void }) => {
    return (
        <div>
            <h1>Something Went Wrong</h1>
            <p>{error.message}</p>
            <button onClick={() => reset()}>Try Again</button>
        </div>
    );
};

export default Error;
