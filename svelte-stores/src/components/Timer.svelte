<script>
  import { time, elapsedTime } from '../stores/stores'

  const dateFormatter = new Intl.DateTimeFormat('en', {
    hour12: true,
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit'
  })
</script>

<h2>The time is {dateFormatter.format($time)}</h2>
<h2>You've been viewing this page for {$elapsedTime}</h2>
