import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import FormComponent from '../components/form/FormComponent'

function FormScreen () {
  return (
    <SafeAreaView style={{
      backgroundColor: 'white',
      margin: 'auto',
      width: '100%',
      padding: '20',
      height: '100%'
    }}
    >
      <ScrollView contentInsetAdjustmentBehavior='scrollableAxes'>
        <View>
          <Text>Voici le super formulaire</Text>
          <FormComponent />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default FormScreen
