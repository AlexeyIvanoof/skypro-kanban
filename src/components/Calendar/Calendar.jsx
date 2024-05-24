import * as S from "./Calendar.styled"
import "react-day-picker/dist/style.css";
import ru from "date-fns/locale/ru";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";

export default function Calendar({ selected, setSelected }) {
	let footer = <S.CalendarContentP>Выберите срок исполнения</S.CalendarContentP>;
	if (selected) {
	footer = <S.CalendarContentP>Срок исполнения {format(selected, "PP", { locale: ru })}.</S.CalendarContentP>;
	}

    return(
<S.CalendarContent>
<DayPicker
      mode="single"
      selected={selected}
      onSelect={setSelected}
      footer={footer}
      locale={ru}
    />
</S.CalendarContent>
    )
}