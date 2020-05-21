package techcr.sample.patient.util;

public class Utility {

    public static String formatForDB(String string) {
        return nvlEmpty(string).toUpperCase();
    }

    public static String nvlEmpty(String string) {
        return isEmpty(string) ? "" : string;
    }

    public static boolean isEmpty(String string) {
        return string == null || string.isEmpty();
    }
}
