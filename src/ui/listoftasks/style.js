import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'grey',
    borderRadius: 5,
    padding: 3,
    marginLeft: 40,
    marginBottom: 10,
    width: 70,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
  },
  buttonRow: {
    flexDirection: 'row',
  },
  completionNotice: {
    fontSize: 15,
    marginLeft: 20,
    marginBottom: 5,
  },
  header: {
    fontSize: 30,
    paddingTop: 20,
    paddingBottom: 10,
  },
  task: {
    fontSize: 20,
    margin: 5,
    marginLeft: 20,
  },
  list: {
    flex: 1,
    padding: 5,
  },
})

export default styles
