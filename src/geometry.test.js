const {
  pointInCircle,
  horizontalLineInCircle,
  rectangleInCircle,
  verticalLineInCircle
} = geometry

const assert = value => {
  if (value !== true) {
    throw new Error(`assertion failed`)
  }
}

const testPointInCircle = () => {
  const circle = {
    x: 2,
    y: 1,
    r: 3
  }

  assert(pointInCircle({ x: 2, y: 0 }, circle))
  assert(!pointInCircle({ x: 2, y: -3 }, circle))
  assert(!pointInCircle({ x: 2, y: 5 }, circle))
  assert(!pointInCircle({ x: 4, y: 3.8 }, circle))
}

const testHorizontalLineInCircle = () => {
  const circle = {
    x: 1,
    y: 2,
    r: 2
  }

  assert(horizontalLineInCircle({ x: 2, y: 1 }, { x: 4, y: 1}, circle))
  assert(!horizontalLineInCircle({ x: 3, y: 1 }, { x: 4, y: 1}, circle))
}

const testVerticalLineInCircle = () => {
  const circle = {
    x: 1,
    y: 2,
    r: 2
  }

  assert(verticalLineInCircle({ x: 2, y: -1 }, { x: 2, y: 5}, circle))
  assert(!verticalLineInCircle({ x: 4, y: -1 }, { x: 4, y: 5}, circle))
}

const testRectangleInCircle = () => {
  const circle = {
    x: 150,
    y: 250,
    r: 60
  }

  assert(rectangleInCircle({ x: 100, y: 200, width: 100, height: 200 }, circle))
  assert(rectangleInCircle({ x: 200, y: 200, width: 100, height: 200 }, circle))
  assert(rectangleInCircle({ x: 200, y: 0, width: 100, height: 400 }, circle))
  assert(!rectangleInCircle({ x: 200, y: 0, width: 100, height: 200 }, circle))
}

testPointInCircle()
testHorizontalLineInCircle()
testVerticalLineInCircle()
testRectangleInCircle()

