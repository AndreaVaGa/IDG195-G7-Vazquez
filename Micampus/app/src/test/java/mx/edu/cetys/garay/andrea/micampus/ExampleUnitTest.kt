package mx.edu.cetys.garay.andrea.micampus

import mx.edu.cetys.garay.andrea.micampus.controller.Utils
import org.junit.Test

import org.junit.Assert.*

/**
 * Example local unit test, which will execute on the development machine (host).
 *
 * See [testing documentation](http://d.android.com/tools/testing).
 */
class ExampleUnitTest {

    val utils = Utils()
    @Test
    fun addition_isCorrect() {
        assertEquals(4, 2 + 2)
    }

    @Test
    fun multiplier_isCorrect() {
        val result = utils.multiplyTwoNumbers(3, 5)
        assertEquals(15, result)
    }

    @Test
    fun division_isCorrect() {
        val actual = utils.divideTwoNumbers(10.0, 5.0)
        assertEquals(2.0, actual,0.0)
    }

    @Test
    fun division_isCorrect_whenDecimalNumbers() {
        val actual = utils.divideTwoNumbers(10.2, 2.0)
        assertEquals(5.1, actual,0.0)
    }

}
