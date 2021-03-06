import React, { Component } from 'react';

// Keeps track of how many requests are currently active.
export let activeRequests = 0;

/* 
  Store a reference to the ProgressBar so 'progressBarFetch' can
  move the ProgressBar to the 'init' state.
*/
export let progressBar: ProgressBar;

/*
  The modes form a state machine with the following flow
  init -----> active -> complete --
  ^  \                            |
  |   \----\                      |
  |         \                     |
  |          \                    |
  |           ▾                   | 
  ---------  hibernate <-----------
  hibernate: no animation is running the bar is invisible
  init: Preparing to potentially show the animation.
  active: the animation is running slowly to 80%
  complete: the animation runs quickly to 100%
*/
type Mode = 'hibernate' | 'init' | 'active' | 'complete' | 'inactive';

interface Props {
  style?: React.CSSProperties;
  render?: (mode: Mode) => JSX.Element;
}

interface State {
  mode: Mode;
}

export class ProgressBar extends Component<Props, State> {
  public state: Readonly<State> = {
    mode: 'hibernate',
  };

  // Set the reference to progressBar
  public componentDidMount(): void {
    progressBar = this;
    this.moveToInit();
  }

  // Only render if the mode changes
  public shouldComponentUpdate(nextProps: Props, nextState: State): boolean {
    return nextState.mode !== this.state.mode;
  }

  /**
   * The ProgressBar continuously checks the status of how many
   * requests are currently active, and will accordingly move
   * to another state.
   *
   * @memberof ProgressBar
   */
  public tick(): void {
    const mode = this.state.mode;

    if (mode === 'complete') {
      setTimeout(() => {
        this.setState({ mode: 'hibernate' });
      }, 1000);
    } else if (mode === 'active') {
      if (activeRequests === 0) {
        setTimeout(() => {
          if (activeRequests === 0) {
            this.moveToMode('complete');
          } else {
            this.tick();
          }
        }, 200);
      } else {
        this.tickWithDelay();
      }
    } else {
      if (activeRequests > 0) {
        setTimeout(() => {
          if (activeRequests > 0) {
            this.moveToMode('active');
          } else {
            this.setState({ mode: 'hibernate' });
          }
        }, 100);
      } else {
        this.setState({ mode: 'hibernate' });
      }
    }
  }

  public moveToInit(): void {
    if (this.state.mode === 'hibernate') {
      this.moveToMode('init');
    }
  }

  public moveToMode(mode: Mode): void {
    this.setState({ mode }, () => {
      this.tick();
    });
  }

  public tickWithDelay(): void {
    setTimeout(() => {
      this.tick();
    }, 100);
  }

  public render(): React.ReactNode {
    const mode = this.state.mode;

    if (mode === 'hibernate') {
      return null;
    }

    if (this.props.render) {
      if (this.props.style) {
        throw new Error("Can't set style and custom render function at the same time.");
      }

      return this.props.render(mode);
    }

    const width = mode === 'complete' ? 100 : mode === 'init' ? 0 : 80;
    const animationSpeed = mode === 'complete' ? 0.8 : 30;
    const transition = mode === 'init' ? '' : `width ${animationSpeed}s ease-in`;

    const style: React.CSSProperties = {
      position: 'absolute',
      top: '0',
      zIndex: 9000,
      backgroundColor: '#f0ad4e',
      height: '4px',
      transition,
      width: `${width}%`,
      ...this.props.style,
    };

    return <div className="react-fetch-progress-bar" style={style} />;
  }
}

type FetchSignature = (input: RequestInfo, init?: RequestInit) => Promise<Response>;

// We store the fetch here as provided by the user.
let originalFetch: FetchSignature;

export function setOriginalFetch(nextOriginalFetch: FetchSignature): void {
  originalFetch = nextOriginalFetch;
}

/**
 * Wrapper around fetch: https://developer.mozilla.org/en/docs/Web/API/Fetch_API
 *
 * It is used to monitor the number of requests which are currently
 * active. Each time a requests is made it increases the number of
 * requests, each time a request is finished, the number is decreased.
 *
 * @export
 * @param {RequestInfo} url The url you want to send a request to.
 * @param {RequestInit} [options] The options you want to pass for that request
 * @returns {Promise<Response>} A Promise which returns a Response
 */
export async function progressBarFetch(input: RequestInfo, init?: RequestInit): Promise<Response> {
  activeRequests += 1;

  if (progressBar) {
    progressBar.moveToInit();
  }

  try {
    const response = await originalFetch(input, init);
    activeRequests -= 1;
    return response;
  } catch (error) {
    activeRequests -= 1;
    return Promise.reject(error);
  }
}

/**
 * Sets the number of activeRequests manually.
 *
 * This method exists for testing purposes, so you should not
 * use it.
 *
 * @export
 * @param {number} nextActiveRequest
 */
export function setActiveRequests(nextActiveRequest: number): void {
  activeRequests = nextActiveRequest;
}