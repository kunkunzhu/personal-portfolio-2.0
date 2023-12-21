import styled from "styled-components";

const ToggleWrapper = styled.div`
    text-align: center;

    .toggle-switch {
        position: relative;
        width: 5rem;
        display: inline-block;
        text-align: left;
    }

    .checkbox {
    display: none;
    }

    .label {
        display: block;
        overflow: hidden;
        cursor: crosshair;
        border-radius: 10rem;
        outline: 2px solid var(--dark);
    }

    .inner {
        display: block;
        width: 200%;
        margin-left: -100%;
        transition: margin 0.3s ease-in 0s;
      }
      .inner:before,
      .inner:after {
        float: left;
        width: 50%;
        height: 2.2rem;
        padding: 0;
        line-height: 2.2rem;
        box-sizing: border-box;
      }
      .inner:before {
        content: "💫";
        padding-left: 1rem;
        background-color: var(--light);
      }
      .inner:after {
        content: "💐";
        padding-right: 1rem;
        text-align: right;
        background-color: var(--light);
      }
      .switch {
        display: block;
        width: 1.8rem;
        margin: 0.2rem;
        background: var(--dark);
        position: absolute;
        top: 0;
        bottom: 0;
        right: 2.8rem;
        border-radius: 10rem;
        transition: all 0.3s ease-in 0s;
      }
      .checkbox:checked + .label .inner {
        margin-left: 0;
      }
      .checkbox:checked + .label .switch {
        right: 0;
      }
`

interface ThemeToggleInterface {
    toggled: boolean;
    onClick: (isToggled: boolean) => void;
}

export const ThemeToggle = ( params : ThemeToggleInterface ) => {
    const { toggled, onClick } = params

    const callback = () => {
      onClick(!toggled)
    }

    return (
        <ToggleWrapper>
            <div className="toggle-switch">
                <input type="checkbox" className="checkbox" id="dark" onChange={callback}/>
                <label className="label" htmlFor="dark">
                    <span className="inner" />
                    <span className="switch" />
                </label>
            </div>
        </ToggleWrapper>
    )
}