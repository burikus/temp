namespace Domain.Extensions
{   
    /// <summary>
    /// Universal generic enum converter that converts between two enum types.
    /// Handles undefined values by mapping them to a special "NotDefined" value.
    /// Conversions are idempotent.
    /// </summary>
    public static class EnumConverter<TEnum> where TEnum : struct, Enum
    {
        /// <summary>
        /// Converts a source enum value to a target enum value.
        /// If the value doesn't exist in target enum, returns NotDefined value.
        /// </summary>
        public static TTarget ConvertTo<TSource, TTarget>(TSource sourceValue)
            where TSource : struct, Enum
            where TTarget : struct, Enum
        {
            if (!TryConvertTo(sourceValue, out TTarget result))
            {
                // Get the NotDefined value from target enum
                if (!TryGetNotDefinedValue<TTarget>(out result))
                {
                    // If NotDefined doesn't exist, return default (0)
                    result = default(TTarget);
                }
            }
            return result;
        }

        /// <summary>
        /// Attempts to convert a source enum value to a target enum value.
        /// </summary>
        public static bool TryConvertTo<TSource, TTarget>(TSource sourceValue, out TTarget targetValue)
            where TSource : struct, Enum
            where TTarget : struct, Enum
        {
            targetValue = default(TTarget);

            // Convert source to string representation
            string sourceName = sourceValue.ToString();
            int sourceIntValue = Convert.ToInt32(sourceValue);

            // Try to parse by name first (exact match)
            if (Enum.TryParse<TTarget>(sourceName, ignoreCase: false, out TTarget parsedByName))
            {
                targetValue = parsedByName;
                return true;
            }

            // Try to parse by name with case-insensitive match
            if (Enum.TryParse<TTarget>(sourceName, ignoreCase: true, out TTarget parsedByNameCaseInsensitive))
            {
                targetValue = parsedByNameCaseInsensitive;
                return true;
            }

            // Try to match by underlying integer value
            if (Enum.TryParse<TTarget>(sourceIntValue.ToString(), out TTarget parsedByValue))
            {
                int parsedIntValue = Convert.ToInt32(parsedByValue);
                if (parsedIntValue == sourceIntValue)
                {
                    targetValue = parsedByValue;
                    return true;
                }
            }

            return false;
        }

        /// <summary>
        /// Converts from one enum to another with custom mapping dictionary support.
        /// </summary>
        public static TTarget ConvertWithMapping<TSource, TTarget>(
            TSource sourceValue,
            Dictionary<TSource, TTarget> customMapping = null)
            where TSource : struct, Enum
            where TTarget : struct, Enum
        {
            // Check custom mapping first
            if (customMapping != null && customMapping.TryGetValue(sourceValue, out TTarget mappedValue))
            {
                return mappedValue;
            }

            // Fall back to standard conversion
            return ConvertTo<TSource, TTarget>(sourceValue);
        }

        /// <summary>
        /// Attempts to get the NotDefined value from the target enum.
        /// </summary>
        private static bool TryGetNotDefinedValue<TTarget>(out TTarget notDefinedValue)
            where TTarget : struct, Enum
        {
            notDefinedValue = default(TTarget);

            // Common names for "not defined" values
            string[] notDefinedNames = { "NotDefined", "Undefined", "Unknown", "None", "Default" };

            foreach (string name in notDefinedNames)
            {
                if (Enum.TryParse<TTarget>(name, ignoreCase: true, out TTarget value))
                {
                    notDefinedValue = value;
                    return true;
                }
            }

            return false;
        }
    }

    /// <summary>
    /// Non-generic helper class for easier usage without type parameters on the class.
    /// </summary>
    public static class EnumConverterHelper
    {
        /// <summary>
        /// Converts a source enum to a target enum.
        /// </summary>
        public static TTarget Convert<TSource, TTarget>(TSource sourceValue)
            where TSource : struct, Enum
            where TTarget : struct, Enum
        {
            return EnumConverter<TSource>.ConvertTo<TSource, TTarget>(sourceValue);
        }

        /// <summary>
        /// Attempts to convert a source enum to a target enum.
        /// </summary>
        public static bool TryConvert<TSource, TTarget>(TSource sourceValue, out TTarget targetValue)
            where TSource : struct, Enum
            where TTarget : struct, Enum
        {
            return EnumConverter<TSource>.TryConvertTo<TSource, TTarget>(sourceValue, out targetValue);
        }

        /// <summary>
        /// Converts with custom mapping dictionary.
        /// </summary>
        public static TTarget ConvertWithMapping<TSource, TTarget>(
            TSource sourceValue,
            Dictionary<TSource, TTarget> customMapping)
            where TSource : struct, Enum
            where TTarget : struct, Enum
        {
            return EnumConverter<TSource>.ConvertWithMapping<TSource, TTarget>(sourceValue, customMapping);
        }
    }
}
