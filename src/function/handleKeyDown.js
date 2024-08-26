const handleKeyDown = (event) => {
  switch (event.key) {
    case "ArrowLeft":
      addRemoveRef.current.focus();
      setBackSign(false);
      break;
    case "ArrowRight":
      backRef.current.focus();
      setBackSign(true);
      break;
    case "ArrowUp":
      targetId < 151 && setSearchParams({ id: targetId + 1 });
      break;
    case "ArrowDown":
      targetId > 1 && setSearchParams({ id: targetId - 1 });
      break;
    default:
      break;
  }
};
