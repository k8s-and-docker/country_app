import {useSetData} from "hooks";

export const IndexedPage = () => {
    const { value, status, click, change, target } = useSetData();

    return (
        <div data-testid="core">
            { target && <h1 data-testid={"main-title"}>{target}</h1> }
            { status && <div data-testid={"status-block"}>status active</div> }
            { value && <div>not null value</div> }

            <h1>hello world</h1>

            <button
                data-testid={"status-btn"}
                onClick={click}>Click</button>

            <input
                data-testid="input-target"
                placeholder="Write here"
                type="text"
                onChange={ change }
                value={ target }
            />
        </div>
    )
}