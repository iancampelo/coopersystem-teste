import 'react-native'
import React from 'react'
import HomeScreen from '../../src/screens/Home'

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer'
jest.useFakeTimers()

describe('HomeScreen', () => {
  it('renders correctly HomeScreen', () => {
    const tree = renderer.create(<HomeScreen />).toJSON()
    expect(tree).toMatchSnapshot()
  })
});