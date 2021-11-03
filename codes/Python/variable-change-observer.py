class Observable():
    def __init__(self, value):
        self.onChangeFunction = lambda: None
        self.onWriteFunction = lambda: None
        self._value = value
        self.oldValue = None

    def get_value(self):
        return self._value

    def set_value(self, value):
        self.oldValue = self._value
        self._value = value
        self.onWriteFunction()
        if not self.oldValue == self._value:
            self.onChangeFunction()

    def onChange(self, func):
        self.onChangeFunction = func

    def onWrite(self, func):
        self.onWriteFunction = func

    value = property(get_value, set_value)

OBSERVED_VARIABLE = Observable(20)

OBSERVED_VARIABLE.onChange(lambda: print(f"Changed value from {OBSERVED_VARIABLE.oldValue} to {OBSERVED_VARIABLE.value}"))
OBSERVED_VARIABLE.onWrite(lambda: print(f"Wrote {OBSERVED_VARIABLE.value}"))

OBSERVED_VARIABLE.value = 18 #Logs "Wrote 18" and "Changed value from 20 to 18"
OBSERVED_VARIABLE.value = 18 #Only logs "Wrote 18" since the value didn't change