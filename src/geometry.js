const geometry = {
  pointInCircle ({ x, y }, circle) {
    return Math.sqrt((x - circle.x)**2 + (y - circle.y)**2) <= circle.r
  },

  horizontalLineInCircle (left, right, circle) {
    if (left.x > right.x) {
      throw new Error('Left point must be given first, got', left, right)
    }

    if (circle.x <= left.x) return geometry.pointInCircle(left, circle)
    if (circle.x >= right.x) return geometry.pointInCircle(right, circle)

    return Math.abs(circle.y - left.y) <= circle.r
  },

  verticalLineInCircle (upper, lower, circle) {
    if (upper.y > lower.y) {
      throw new Error(`Upper point must be given first, got ${upper.y} before ${lower.y}`)
    }

    if (circle.y >= lower.y) return geometry.pointInCircle(lower, circle)
    if (circle.y <= upper.y) return geometry.pointInCircle(upper, circle)

    return Math.abs(circle.x - upper.x) <= circle.r
  },

  rectangleInCircle ({ x, y, width, height }, circle) {
    return (
      geometry.horizontalLineInCircle(
        { x, y },
        { x: x + width, y },
        circle) ||
      geometry.horizontalLineInCircle(
        { x, y: y + height },
        { x: x + width, y: y + height},
        circle) ||
      geometry.verticalLineInCircle(
        { x, y },
        { x, y: y + height },
        circle))
  }
}
