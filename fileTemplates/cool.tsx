import * as React from 'react'
import styled from 'styled-components'
import { css } from 'emotion'
const Container = styled.div`
  display: flex;
  background-color: #ff5b5c;
`

const Item = styled.div`
  background-color: gray;
`
export function Demo1() {
  return (
    <div>
      <p>By default a flex item dont take the whole width</p>
      <Container>
        <Item>one</Item>
        <Item>two</Item>
        <Item>three</Item>
      </Container>
      <p>
        The flex grow value will depend on how many columns are there. If there
        are three columns and each one has a value of 1, then it will be equally
        distributed. But if one child uses 2, it will get more space
      </p>
      <Container>
        <Item>one</Item>
        <Item
          className={css`
            flex-grow: 1;
          `}
        >
          two
        </Item>
        <Item
          className={css`
            flex-grow: 2;
            order: 0;
          `}
        >
          three
        </Item>
      </Container>
      <p>
        flex-basis This defines the default size of an element before the
        remaining space is distributed
      </p>
      <Container>
        <Item
          className={css`
            flex-basis: 30%;
            //flex-grow: 1;
          `}
        >
          one
        </Item>
        <Item
          className={css`
            //flex-grow: 1;
          `}
        >
          two
        </Item>
        <Item
          className={css`
            //flex-grow: 1;
          `}
        >
          three
        </Item>
      </Container>
      <p>Flex basis 20 percent on item 2</p>
      <Container>
        <Item>one</Item>
        <Item
          className={css`
            flex-basis: 20%;
          `}
        >
          two
        </Item>
        <Item className={css``}>three</Item>
      </Container>
      <p>flex-flow: row wrap; same as flex direction plus flex-wrap: wrap </p>
      <div
        className={css`
          display: flex;
          width: 200px;
          flex-flow: row wrap;
        `}
      >
        <Item>longer text than usual</Item>
        <Item
          className={css`
            //flex-basis: 20%;
          `}
        >
          two
        </Item>
        <Item className={css``}>three</Item>
      </div>
      <p>
        Flex basis auto. Here we set each item as 100px explicitly but we use
        Flex basis auto on the second one
      </p>
      <div
        className={css`
          background-color: #ff5b5c;
          width: 350px;
          display: flex;

          & div {
            //flex-grow: 1;
            //flex-shrink: 3;
            flex-basis: 100px;
          }

          & div:nth-of-type(2) {
            background-color: #ceffba;
            flex-basis: auto;
          }
        `}
      >
        <Item>longer text than usual</Item>
        <Item
          className={css`
            //flex-basis: 20%;
          `}
        >
          two
        </Item>
        <Item className={css``}>three</Item>
      </div>
      <p>
        The same as above ... but we use flex grow on each.. so the 350 ppixel
        width is full occupied
      </p>
      <div
        className={css`
          background-color: #ff5b5c;
          width: 350px;
          display: flex;

          & div {
            flex-grow: 1;
            //flex-shrink: 3;
            flex-basis: 100px;
          }

          & div:nth-of-type(2) {
            background-color: #ceffba;
            flex-basis: auto;
          }
        `}
      >
        <Item>longer text than usual</Item>
        <Item
          className={css`
            //flex-basis: 20%;
          `}
        >
          two
        </Item>
        <Item className={css``}>three</Item>
      </div>
      <p>
        Flex shrink only works if there is not much space left. Here we set 150
        pixels each so it will be longer than 350 cpmbined. but we set flex
        shrink on item 2. The higher the value the more it will shrink
      </p>
      <div
        className={css`
          background-color: #ff5b5c;
          width: 350px;
          display: flex;

          & div {
            flex-grow: 1;
            //flex-shrink: 1;
            flex-basis: 150px;
          }

          & div:nth-of-type(2) {
            background-color: #ceffba;
            flex-shrink: 2;
          }
        `}
      >
        <Item>longer text than usual</Item>
        <Item
          className={css`
            //flex-basis: 20%;
          `}
        >
          two
        </Item>
        <Item className={css``}>three</Item>
      </div>
      <p>
        align items baseline. This can be useful if you jave varying font sizes
      </p>
      <div
        className={css`
          background-color: #ff5b5c;
          display: flex;
          align-items: baseline;
        `}
      >
        <Item>longer text than usual</Item>
        <Item
          className={css`
            font-size: 30px;
            //flex-basis: 20%;
          `}
        >
          two
        </Item>
        <Item className={css``}>three</Item>
      </div>
      <p>
        here we use flex: 1 1 160px on each item. here they fill the remaining
        space
      </p>
      <div
        className={css`
          background-color: #ff5b5c;
          width: 600px;
          display: flex;
          flex-wrap: wrap;
          & > * {
            flex: 1 1 160px;
            background-color: #fff59e;
          }
        `}
      >
        <div>One</div>
        <div>Two</div>
        <div>Three</div>
        <div>Four</div>
        <div>Five</div>
        <div>Six</div>
        <div>Seven</div>
        <div>Eight</div>
        <div>Nine</div>
        <div>Ten</div>
      </div>
      <p>without grow </p>
      <div
        className={css`
          background-color: #ff5b5c;
          width: 600px;
          display: flex;
          flex-wrap: wrap;
          & > * {
            flex: 0 1 160px;
            background-color: #fff59e;
          }
        `}
      >
        <div>One</div>
        <div>Two</div>
        <div>Three</div>
        <div>Four</div>
        <div>Five</div>
        <div>Six</div>
        <div>Seven</div>
        <div>Eight</div>
        <div>Nine</div>
        <div>Ten</div>
      </div>
      <br />
    </div>
  )
}
