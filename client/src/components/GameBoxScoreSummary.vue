<template>
    <section class="scoring__summary">
        <table>
            <thead>
                <th></th>
                <th>
                    1
                </th>
                <th>
                    2
                </th>
                <th>
                    3
                </th>
                <th>
                    4
                </th>
                <th>
                    T
                </th>
            </thead>
            <tbody>
                <tr>
                    <td>{{homeTeamName}}</td>
                    <td>{{homeTeamQ1}}</td>
                    <td>{{homeTeamQ2}}</td>
                    <td>{{homeTeamQ3}}</td>
                    <td>{{homeTeamQ4}}</td>
                    <td>{{homeTeamTotal}}</td>
                </tr>
                <tr>
                    <td>{{awayTeamName}}</td>
                    <td>{{awayTeamQ1}}</td>
                    <td>{{awayTeamQ2}}</td>
                    <td>{{awayTeamQ3}}</td>
                    <td>{{awayTeamQ4}}</td>
                    <td>{{awayTeamTotal}}</td>
                </tr>
            </tbody>
        </table>
    </section>
</template>

<script>
export default {
    name: "ScoringSummary",
    props: [
        "homeTeamName", "homeTeamQ1", "homeTeamQ2", "homeTeamQ3", "homeTeamQ4", "homeTeamTotal",
        "awayTeamName", "awayTeamQ1", "awayTeamQ2", "awayTeamQ3", "awayTeamQ4", "awayTeamTotal"
    ]
    
}
</script>

<style lang="scss" scoped>
.scoring__summary {
    display: flex;
    flex-direction: column;
    margin: 0 3rem;
    font-size: 1.25rem;
    h1 {
        font-weight: 100;
    }
    table {
        border-collapse: collapse;
        thead {
            border-bottom: 1px solid #cccccc;
        }
        th, td {
            padding: 1rem;
        }
    }
}
</style>


