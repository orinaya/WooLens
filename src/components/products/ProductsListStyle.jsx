import { StyleSheet } from 'react-native'
export const productsListStyle = StyleSheet.Style = ({
  container: {
    flexGrow: 1,
    flexDirection: 'column',
    gap: 10,
    width: 'auto',
    height: 'auto'

  }
})

export const productsStyle = StyleSheet.Style = ({
  button: {
    color: '#154562',
    borderRadius: 4,
    width: 'fit-content',
    height: 40,
    backgroundColor: 'rgb(72, 120, 166)'
  },
  buttonView: {
    position: 'absolute',
    bottom: 20,
    right: 20
  }
})

export const productsListItemStyle = StyleSheet.Style = ({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    backgroundColor: '#fff',
    elevation: 3
  },
  textContainer: {
    flex: 1,
    flexDirection: 'column'

  }
})
