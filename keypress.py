import tty
import sys
import termios

def main():
	orig_settings = termios.tcgetattr(sys.stdin)

	tty.setcbreak(sys.stdin)
	x = 0
	while x != chr(27): # ESC
			x=sys.stdin.read(1)[0]
			print("You pressed", x)

	termios.tcsetattr(sys.stdin, termios.TCSADRAIN, orig_settings)
main()

# from curtsies import Input

# def main():
#     with Input(keynames='curses') as input_generator:
#         for e in input_generator:
#             print(repr(e))

# if __name__ == '__main__':
#     main()